import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRole) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRole, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdmin() {
  const email = 'admin@dkwgroup.net'; // Change this as needed
  const password = 'dkw-group-admin-2024'; // Strong password
  const fullName = 'Administrator DKW Group';

  console.log(`Attempting to create admin account for: ${email}`);

  // 1. Create the user in Auth
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName }
  });

  if (authError) {
    if (authError.message.includes('already registered')) {
      console.log('User already exists in Auth. Updating profile role...');
      
      // Get the existing user ID
      const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
      const existingUser = userData?.users.find(u => u.email === email);
      
      if (existingUser) {
        // 2. Update role to admin in Profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('id', existingUser.id);
          
        if (profileError) {
          console.error('Error updating profile role:', profileError.message);
        } else {
          console.log('Successfully updated existing user to Admin role.');
        }
      }
    } else {
      console.error('Error creating user:', authError.message);
    }
    return;
  }

  const userId = authData.user.id;
  console.log('User created in Auth with ID:', userId);

  // 2. Update role to admin in Profiles table (trigger usually handles insertion, but we want admin)
  const { error: profileError } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', userId);

  if (profileError) {
    console.error('Error updating profile role:', profileError.message);
    // Try to insert if update failed (though trigger should have run)
    await supabase.from('profiles').upsert({ id: userId, role: 'admin', full_name: fullName });
  } else {
    console.log('Successfully set Admin role.');
  }
}

createAdmin().catch(console.error);

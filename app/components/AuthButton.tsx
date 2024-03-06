import { Link } from "@remix-run/react";
import { Session, User } from '@supabase/supabase-js'
import LinkComponent from './link';
import { supabase } from '~/lib/supabase/supabase.server';
import { Form } from "@remix-run/react";

interface AuthButtonProps {
  session: Session | null;
}

export default function AuthButton({session}: AuthButtonProps) {

  const signOut = async () => {
    'use server'

    await supabase.auth.signOut()
    // return redirect('/login')
  }

  console.log(session, 'session')

  return session?.user ? (
    <div className="flex items-center gap-4">
      <LinkComponent href={`/profiles/${session.user.user_metadata.username}`}>{session.user.user_metadata.username}!</LinkComponent>
      <Form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </Form>
    </div>
  ) : (
    <Link
      to="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  )
}

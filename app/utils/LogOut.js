export async function logOut({supabase, router}){
    await router.push('/')
    await supabase.auth.signOut()
}
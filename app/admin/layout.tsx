import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check auth - skip for login page
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  // We'll check the pathname-based redirect in the page components themselves
  // Here we just provide the layout structure

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1a0524]">
      {user && <AdminSidebar />}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}

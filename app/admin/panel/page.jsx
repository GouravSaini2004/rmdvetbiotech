import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProductAdminList from "../../../components/adminproductlist";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-green-600 mb-1">
              RMD VET BIOTECH
            </p>

            <h1 className="text-3xl font-extrabold text-green-900">
              Admin Dashboard
            </h1>

            <p className="text-green-700 mt-1">
              Manage your products and website content
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-green-100 rounded-2xl shadow-sm p-5 sm:p-6">
          <ProductAdminList />
        </div>

      </div>
    </div>
  );
}
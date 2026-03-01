import Navbar from "@/components/common/NavBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}
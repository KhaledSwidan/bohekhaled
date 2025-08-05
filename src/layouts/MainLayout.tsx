import Footer from "@/pages/footer";
import Navbar from "@/pages/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='relative'>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

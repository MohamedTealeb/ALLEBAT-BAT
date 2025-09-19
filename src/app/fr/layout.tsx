import Navbar from '@/components/shared/Navbar';

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
          <Navbar />
          {children}
        </>
    );
  }
  
import Navbar from "@/components/Navbar";
import MenuList from "@/components/MenuList";
import Body from "@/components/Body";
import ScrollTop from "@/common/ScrollTop";
import SubscribeForm from "@/common/SubscribeForm";
import Footer from "@/components/Footer";
import Copyright from "@/common/Copyright";
import SearchContainer from "@/common/SearchContainer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MenuList />
      <Body />
      <ScrollTop />
      <SearchContainer />
      <SubscribeForm />
      <Footer />
      <Copyright />
    </main>
  );
}

import Header from "./components/Header.tsx";
import UserProfile from "./features/profile/UserProfile.tsx";
import GallerySection from "./features/gallery/GallerySection.tsx";

function App() {
    return (
        <>
            <Header />
            <UserProfile />
            <GallerySection />
        </>
    );
}

export default App

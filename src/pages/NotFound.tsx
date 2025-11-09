import Container from "../component/Container.tsx";

function NotFound() {
    return (
        <Container className="flex justify-center items-center">
            <h1 className="font-bold text-3xl">404 - Page Not Found</h1>
        </Container>
    );
}

export default NotFound;
import Button from "@/components/Button";
import { useNavigate } from "react-router";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <Button
            type="back"
            onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}
        >
            &larr; Back
        </Button>
    );
}

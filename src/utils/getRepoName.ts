import { repository } from "../../package.json";

export default function getRepoName() {
    const url = URL.parse(repository.url);

    if (url === null) {
        console.error("Failed to parse repo name");
        return "worldwise";
    }

    const arr = url.pathname.split("/");

    if (arr.length !== 3) {
        console.error("Failed to parse repo name");
        return "worldwise";
    }

    return arr[2];
}

import { getPackageJSON } from "./getPackageJSON";

export default function getProjectName() {
    return getPackageJSON().name;
}

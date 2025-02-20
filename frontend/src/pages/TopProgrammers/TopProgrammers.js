import styles from "./TopProgrammers.module.css";
import TopProgrammersModule from "../../components/TopProgrammers/TopProgrammers";
import Topbar from "../../components/Topbar/Topbar";

function TopProgrammers() {
    return (
        <div>
            <Topbar />
            <TopProgrammersModule />;
        </div>
    );
}

export default TopProgrammers;

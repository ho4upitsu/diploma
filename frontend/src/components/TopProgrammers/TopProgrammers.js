import ProgrammerInfo from "./ProgrammerInfo/ProgrammerInfo";
import styles from "./TopProgrammers.module.css";

const users = [
    { username: "ShadowHunter", points: 1200 },
    { username: "CodeWizard", points: 950 },
    { username: "ByteKnight", points: 1340 },
    { username: "CyberNinja", points: 870 },
    { username: "PixelMaster", points: 1125 },
    { username: "DevSamurai", points: 1400 },
    { username: "Hackerman", points: 980 },
    { username: "ScriptMage", points: 1250 },
    { username: "DataTitan", points: 1080 },
    { username: "NeonPhantom", points: 1015 },
];

const sortedUsers = users.sort((a, b) => b.points - a.points);

function TopProgrammers() {
    return (
        <div className={styles.topProgrammersContainer}>
            <h1 className={styles.topProgrammersHeader}>Top Programmers</h1>
            {sortedUsers.map((user, index) => (
                <ProgrammerInfo
                    username={user.username}
                    points={user.points}
                    place={index + 1}
                    key={user.username}
                />
            ))}
        </div>
    );
}

export default TopProgrammers;

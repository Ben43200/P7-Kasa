export default function MakeList({ list }) {
    return (
        <ul>
            {
                list.map((entry, i) => <li key={"li" + i} className="listEquipements">{entry}</li>)
            }
        </ul>
    );
}
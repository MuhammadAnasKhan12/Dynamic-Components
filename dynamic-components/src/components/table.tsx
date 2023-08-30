type tableprops = {
    data: any[];
    col: any[];
}
function Table(props: tableprops) {
    return (
        <>
            <table border={1} cellPadding={10}> 
                <thead>
                    <tr>
                        {props.col.map((x, i) => (
                            <th>{x.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((x, i) => (
                        <tr>
                            {props.col.map((item, i) => (
                                <td>{x[item.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Table;


function AdminTableItems ({response}) {
    let responseDate = response.date.slice(0, 10);

    return (
        <tr key={response.id}>
        <td>{response.id}</td>
        <td>{response.feeling}</td>
        <td>{response.understanding}</td>
        <td>{response.support}</td>
        <td>{response.comments}</td>
        <td>{response.flagged ? '🚩' : ''}</td>
        <td>{responseDate}</td>
        <td><button>DELETE</button></td>
        <td><button>FLAG</button></td>
    </tr>
    )
}

export default AdminTableItems
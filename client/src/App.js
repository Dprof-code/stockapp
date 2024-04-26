import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>STOCK ID</th>
          <th>STOCK NAME</th>
          <th>STOCK TICKER SYMBOL</th>
          <th>COMPANY NAME</th>
          <th>SECTOR</th>
          <th>INDUSTRY</th>
          <th>EXCHANGE</th>
          <th>INDUSTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}


export default App;

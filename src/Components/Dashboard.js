import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className='mt-5 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Customers List</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group mr-2'>
            <button className='btn btn-sm btn-outline-secondary'>Share</button>
            <button className='btn btn-sm btn-outline-secondary'>Export</button>
          </div>
          <button className='btn btn-sm btn-outline-secondary dropdown-toggle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-calendar'
            >
              <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
              <line x1={16} y1={2} x2={16} y2={6} />
              <line x1={8} y1={2} x2={8} y2={6} />
              <line x1={3} y1={10} x2={21} y2={10} />
            </svg>
            This Month
          </button>
          <button className='btn btn-secondary'>Filter by Course</button>
        </div>
      </div>

      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>sit</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>Praesent</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>ante</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>dapibus</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>nisi</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Nulla</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>at</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>nibh</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>Duis</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>sagittis</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>mauris</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>Fusce</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>sed</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>augue</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>Mauris</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>massa</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>arcu</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>eget</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>aptent</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>taciti</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>litora</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>torquent</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>nostra</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>per</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>Curabitur</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>sodales</td>
              <td>email@email.com</td>
              <td>12345678</td>
              <td>libero</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import { DataGrid } from '@mui/x-data-grid';
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'coursename',
      headerName: 'Course name',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Course Description',
      width: 380,
      editable: true,
    },
    {
      field: 'isActive',
      headerName: 'Is Active',
      width: 100,
      editable: true,
      renderCell: (params) => {
        return params.value ? <div className='mt-4'><FaCheck color="green" /></div> : null;
      },
    },
      {
        field: 'view',
        headerName: 'View Course',
        width: 100,
        editable: false,
        renderCell: (params) => (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button><FaRegEye color='green' size={18}/></button>
            {/* <button><CiEdit color='yellow' size={18}/></button>
            <button><MdDeleteOutline color='red' size={18}/></button> */}
            </div>
          ),
      },
    
  ];
  
  const rows = [
    { id: 1, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt optio odit ut?', coursename: 'Soft Skills', isActive: <FaCheck color='green'/>},
    { id: 2, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt optio odit ut?', coursename: 'Stress Management', isActive: <FaCheck color='green'/> },
    { id: 3, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt optio odit ut?', coursename: 'General Insurance', isActive: ''},
    { id: 4, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt optio odit ut?', coursename: 'How Claim Works in Insurance', isActive: <FaCheck color='green'/> },
    { id: 5, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt optio odit ut?', coursename: 'Insurance Policies', isActive: '' },
  ];

const MentorsTable = () => {
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'bg-[#F0FFFF]' : 'bg-white'
          }
      />
      
  )
}

export default MentorsTable
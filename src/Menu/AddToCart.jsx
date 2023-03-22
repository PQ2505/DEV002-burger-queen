import { db } from "../Firebase/fb-config.js"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import "./Menu.css";

const AddToCart = ({ addOrder, personName, tableSelect, setAddOrder }) => {
    const uploadOrder = async () => {
       await addDoc(collection(db, "pedidos"),
            { ...addOrder, personName, tableSelect, state: 'Enviar a cocina', date: new Date() }
        )
    }

const createOrder = () => {
    uploadOrder();
}
const validateInputName = () => {
    if (personName === '' || tableSelect === 'Mesa') {
        Swal.fire({
            title: '<strong>Por favor rellena todos los campos</strong>',
            icon: 'info'
        })
    } else if (addOrder.length === 0) {
        Swal.fire({
            title: '<strong>Por favor agrega un producto</strong>',
            icon: 'error'
        })
    }
    else {
        createOrder()
    }
}

const deleteOrder = () => {
    Swal.fire({
        title: '¿Estás seguro de eliminar el pedido?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            setAddOrder([]);
        }
    })
}

return (
    <>
        
        <section className='save-order'>
            <button
                className='btn-save-order'
                onClick={() => {
                    validateInputName()
                }}
            >
                ENVIAR A COCINA
            </button>
        </section>
        <section className='delete-order'>
        <button
                className='btn-delete-order'
                onClick={() => {
                    deleteOrder()
                }}
            >
                CANCELAR
            </button>
                </section>
    </>
)
}

export default AddToCart
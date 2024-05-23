import { Link } from "@inertiajs/react"

export const ItemCard = () => {
    return (
        <div className="col-span-3 w-full h-52 bg-[#1C1C1C] rounded-lg text-white" >
            <Link href="">
                <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" className="h-36 w-full object-cover rounded-t-lg" alt="" />
                <div className="py-2 px-4 text-center" >
                    <p className="text-xl font-semibold" >Soto</p>
                    <p>Rp 15.000</p>
                </div>
            </Link>
        </div>
    )
}

import { useDispatch, useSelector } from "react-redux"
import { MainGeneral } from "./main.styles"
import { Navigation } from "../shared-components/navigation/Navigation"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { IRootState } from "../store/store"
import { Dispatch } from "@reduxjs/toolkit"
import { connectSse } from "../service/apiSse"
import { sendDataSuccess } from "../store/slices/sse/sse.slice"
import {  TypeData } from "../store/slices/sse/typesSse.models"
import { createTable, deleteTable, updateTable } from "../store/slices/tables/tables.slice"
import { createOrder, deleteOrder, updateOrder } from "../store/slices/orders/orders.slice"



// const URL = 'http://localhost:3000/api/events?kds=myKds&user='
export function Main() {
    const { user, eventoSse, tables, orders } = useSelector((state: IRootState) => state);
    const dispatch = useDispatch<Dispatch>();

    const nameUser = user.username;

    useEffect(() => {
        connectSse(nameUser).onmessage = (e) => {
            const data = JSON.parse(e.data);
            dispatch(sendDataSuccess(data));
        }

    }, []);

    useEffect(() => {
        if (eventoSse.evento) {
            const { value, crudId, type, userId } = eventoSse.evento
            if (crudId === tables.crudId) {

                switch (type) {
                    case TypeData.CREATE:
                        if (userId !== user.username) { dispatch(createTable(value)) }

                        break
                    case TypeData.UPDATE:
                        if (userId !== user.username) { dispatch(updateTable(value)) }

                        break
                    case TypeData.DELETE:
                        if (userId !== user.username) { dispatch(deleteTable(value)) }

                        break
                    default:
                        break
                }

            }
            if (crudId === orders.crudId) {
                switch (type) {
                    case TypeData.CREATE:
                        if (userId !== user.username) {dispatch(createOrder(value)) }
                        break
                    case TypeData.UPDATE:
                        if (userId !== user.username) {dispatch(updateOrder(value)) }

                        break
                    case TypeData.DELETE:
                        if (userId !== user.username) {dispatch(deleteOrder(value)) }

                        break
                    default:
                        break
                }
            }


        }


    }, [eventoSse]);
    return (
        <MainGeneral>
            <Navigation />
            <Outlet />
        </MainGeneral>
    )
}



import {ChangeEvent} from 'react'
export interface item {
    title:string,
    date_start:string,
    date_end:string,
    location:string,
    description:string,
    url:string,
    ticket_price:string
}

export interface data {
    data:item[]
}

export interface state {
    origin:item[],
    data:item[]
}

export type EvtC = ChangeEvent<HTMLInputElement>

export type action = Record<string,item[]>
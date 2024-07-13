import { star } from "../../icons/icons"

export const countStars = (value:number) => {
    let result;
    if(value === 1){
        result = <span className="flex ml-3">{star}</span>
    }
    if(value === 2){
        result = <span className="flex ml-3">{star} {star}</span>
    }
    if(value === 3){
        result = <span className="flex ml-3 ">{star} {star} {star}</span>
    }
    if(value === 4){
        result = <span className="flex ml-3">{star} {star} {star} {star}</span>
    }
    if(value === 5){
        result = <span className="flex ml-3">{star} {star} {star} {star} {star}</span>
    }

    return result
  }
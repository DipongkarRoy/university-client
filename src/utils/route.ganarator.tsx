import { TRoute, TUserPath } from "../types/types"


export const routeGanarator = (items:TUserPath[])=>{
    const routes = items.reduce((acc:TRoute[] ,item)=>{
        if(item.path && item.element){
         acc.push({
             path:item.path,
             element:item.element,
         })
        }
        if(item.children){
         item.children.forEach((child)=>{
             acc.push({
                 path:child.path!,
                 element:child.element,
             })
         })
        }
         return acc;
     },[])

     return routes;
}
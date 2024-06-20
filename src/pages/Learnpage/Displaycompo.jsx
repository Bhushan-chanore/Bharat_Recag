import { Typography , Button} from "@mui/material"

export const renderText = ({label , color , align , variant})=>(
     <Typography
     color={color ? color : "white"} 
     align={align ? align :"center"}
     variant={variant ? variant :"h6"}
     >{label}</Typography>
     );


export const renderButton =({label , color , handleclick , variant}) => (
    <Button  variant={variant ? variant :"h6"}  color={color ? color : "white"}  onClick={handleclick} style={{backgroundColor:"#1976d2" , color: "white", borderRadius:"5px"}} >{label}</Button>
)

export const renderButtonx =({label , color , handleprevious , variant}) => (
    <Button  variant={variant ? variant :"h6"}   color={color ? color : "white"}  onClick={handleprevious} style={{right:"0", backgroundColor:"#1976d2" , color: "white", borderRadius:"5px"}} >{label}</Button>
)

export const renderButtons =({label , color  , variant}) => (
    <Button  variant={variant ? variant :"h6"}   color={color ? color : "white"}  type="submit" style={{right:"0", backgroundColor:"#1976d2" , color: "white", borderRadius:"5px"}}>{label}</Button>
)
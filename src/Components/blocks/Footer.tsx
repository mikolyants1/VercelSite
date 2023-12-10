import { memo } from "react"
import { FootBlock, FootContent, PastButton } from "../../style/style"


interface props {
    sort:()=>void
}

function Footer({sort}:props):JSX.Element{
    return (
        <>
          <FootContent>
            See also: {" "}
            <PastButton onClick={sort}>
              past events
            </PastButton>
          </FootContent>
          <FootBlock>
            Welcome to the Itez Events Calendar! Here you will find a comprehensive listing 
            of all the exciting upcoming ICOs,conferences, and cryptocurrency gatherings
             in the Web3 market. <br /><br />Stay up-to-date with the latest trends,
             discover new coins, and explore the world of NFTs.Whether you're an investor,
             enthusiast, or just curious about the blockchain space, our calendar has 
             something for everyone. <br /><br />Join us and be part of the biggest and
             newest events in the ever-changing world of cryptocurrencies and digital finance.
             Don't miss out on the opportunities that await  you in this fascinating ecosystem!
         </FootBlock>
       </>
    )
}

export default memo(Footer)
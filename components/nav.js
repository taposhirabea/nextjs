import Link from "next/link"
import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
        <nav>
            <ul className="nav-links">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/events'>Events</Link>
                </li>
            </ul>
        </nav>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
height: 4rem;
background: var(--clr-grey-6);
    .nav-links {
      display: flex;
      justify-content: center;
      list-style-type: none;

      li{
        margin: .9rem 0.5rem;
      }
      a{
        color: var(--clr-grey-9);
        font-weight: 520;
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: .5rem;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-10);
          color: var(--clr-grey-8);
        }
      }
    }

`
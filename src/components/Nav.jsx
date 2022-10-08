import InstragramLogo from '../assets/instagram.png'

export default function Nav() {
  return (
        <nav>
            {/* Instgram Logo */}
            <button className="logo">
                <img src={InstragramLogo} alt="Instagram Logo" />
            </button>

            <input type="text" className='search' placeholder='Search'/>

            {/* For the Instgram Icons */}
            <span className='nav-links'>
                <button>
                    <i className="fas fa-home"></i>
                </button>
                <button>
                    <i className="fas fa-comment-alt"></i>
                </button><button>
                    <i className="fas fa-compass"></i>
                </button><button>
                    <i className="fas fa-heart"></i>
                </button>
            </span>

        </nav>
    )
}

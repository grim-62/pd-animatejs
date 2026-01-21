import './styles.css'
import pd from 'pd-animatejs'
import * as THREE from "three"
import gsap from 'gsap'

// Initialize mouse follower
pd.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
})

// Add hover effects to elements
pd.hoverWithMediaCircle(".hover-target", {
    images: [
        "https://images.unsplash.com/photo-1699475554452-f24c6a035a41?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1699354510794-1b2dd019b31d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
})

// Animate text on load
gsap.from("h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
})

gsap.from(".hover-target", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    stagger: 0.2
})

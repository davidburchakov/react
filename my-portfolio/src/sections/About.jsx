import {batch,  ScrollPage, 
  ScrollContainer, Animator, 
  Sticky, Zoom, 
  FadeIn, FadeOut,
  MoveOut, Fade, StickyIn, ZoomIn,
  Move
} from 'react-scroll-motion';
import 'css/about.css';

export default function About(){
    return(
      <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(FadeOut(), Sticky(), MoveOut(0, -200))}>
              <h2>Hello scroll animation thing, bitch!</h2>             
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
              <h2>fade scroll up, bitch!</h2>             
            </Animator>
          </ScrollPage>
          <ScrollPage >
            <Animator animation={batch(Sticky(), Fade(), Move())}>
              <h2>HUUUUUUHH!!??!?!?!?!??!?, bitch!</h2>             
            </Animator>
          </ScrollPage>
      </ScrollContainer>
      //   <section className="section about" id="about">
      //   <h1 className="">Click to open</h1>
      //   <div className="about-text">
      //     <p>Hello! My name is David Burchakov.</p>
      //     <p>Bla bla bla</p>
      //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex quos ullam cupiditate nostrum beatae fuga quidem repellendus at aut doloremque voluptates nulla, aspernatur asperiores cum doloribus optio accusamus et.</p>
      //   </div>
      // </section>
    );
}
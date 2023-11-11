import './index.scss';
import React from 'react';
import Sidebar from '../Sidebar';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About'
import Contact from '../Contact';
import Portfolio from '../Portfolio';

const Layout = (props) => {

  console.log(`Art by Blazej Kozlowski

       _
       \`*-.
        )  _\`-.
       .  : \`. .
       : _   '  \\
       ; *\` _.   \`*-._
       \`-.-'          \`-.
         ;       \`       \`.
         :.       .        \\
         . \\  .   :   .-'   .
         '  \`+.;  ;  '      :
         :  '  |    ;       ;-.
         ; '   : : \`-:     _.\`* ;
[bug] .*' /  .*' ; .*\`- +\'  \`*'
      \`*-*   \`*-*  \`*-*


Hey! 👋 Hello to all the curious folks looking in the console!
I hope you're having a good day and enjoying my website.

If you want to know more about me, you can visit my website here 👉 https://franci-lobbie.fr or check out my GitHub account at https://github.com/francilobbie.


Thanks to Slobodan for his React portfolio clone tutorial. You can find the turorial on his YouTube channel. You can find the tutorial here 👉 https://www.youtube.com/watch?v=ESHaail1eGc



See you soon! 🙂
`);



  return (
    <div className='app'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className=" bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};


export default Layout;

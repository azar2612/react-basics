
import React from 'react';
import './compo.css';

const CWLogin = () => <div className="cwc">Login</div>;

const CWRegister = () => <div className="cwc">Register</div>;

const CompoLayout = ({ children }) => (
  <>
    <div className="cwheader">Header</div>
    <div className="cwcontent">
      {children}
    </div>
    <div className="cwfooter">Footer</div>
  </>
);

const CompoWrapAnother = () => (
  <>
    <CompoLayout>
      <CWLogin />
    </CompoLayout>

    <CompoLayout>
      <CWRegister />
    </CompoLayout>
  </>
);

export default CompoWrapAnother;

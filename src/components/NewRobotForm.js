import React from "react";

const NewRobotForm = () => {
  return (
    <article className="pa4 black-80">
      <form action="sign-up_submit" method="get" acceptCharset="utf-8">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="email-address">
              Email address
            </label>
            <input
              className="pa2 input-reset ba bg-transparent"
              type="email"
              name="email-address"
              id="email-address"
            />
          </div>
        </fieldset>
        <div className="mt3">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </article>
  );
};

export default NewRobotForm;

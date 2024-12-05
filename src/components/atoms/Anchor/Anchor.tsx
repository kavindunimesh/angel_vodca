import { IAnchorProp } from "../../../types/components/IAtoms";

const Anchor = ({ href, className = '', children }:IAnchorProp) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Anchor;

function ContainerCard({ children, customStyle }) {
  const style = customStyle
    ? customStyle + " shadow-[17px_20px_15px_0_rgba(0,0,0,0.1)]"
    : "shadow-[17px_20px_15px_0_rgba(0,0,0,0.1)]";
  return <div className={style}>{children}</div>;
}

export default ContainerCard;

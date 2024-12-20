const Container = ({ children, classNames }) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 ${classNames}`}>
      {children}
    </div>
  );
};

export default Container;

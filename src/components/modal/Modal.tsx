interface Props {
  closeModal: () => void;
}

function Modal({ closeModal }: Props) {
  return (
    <div className="flex flex-col gap-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-amber-800 rounded-2xl p-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa
        provident nisi, fuga animi quibusdam illum aut voluptatibus voluptate,
        aliquam nostrum? Eum recusandae ducimus soluta, sint unde mollitia sunt
        corporis.
      </p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
export default Modal;

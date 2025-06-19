import TypingEffect from "../components/typingeffect/TypingEffect";

function TypingEffectPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <TypingEffect text="I'm a Google Engineer" delay={100} />
    </div>
  );
}
export default TypingEffectPage;

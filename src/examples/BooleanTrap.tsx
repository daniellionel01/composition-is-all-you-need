export function BooleanTrap() {
  return (
    <div className="code-card bad">
      <h3>Boolean-prop trap</h3>
      <pre>{`<UserForm
  isUpdateUser
  hideWelcome
  hideTerms
  redirectToOnboarding={false}
  onlyEditName
  isSlugRequired={false}
/>`}</pre>
      <p>
        Every new product variant adds one more switch. The parent already knows the shape it wants; the child gets stuck
        branching through a maze.
      </p>
    </div>
  );
}

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
        Each new product variant adds another optional prop. The parent already knows which tree it wants, but the child
        has to branch everywhere.
      </p>
    </div>
  );
}

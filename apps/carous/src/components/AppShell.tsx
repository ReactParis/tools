interface AppShellProps {
  children?: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return <div className="flex flex-row flex-nowrap">{children}</div>;
}

export function AppShellSidebar({ children }: AppShellProps) {
  return <div className="flex-1">{children}</div>;
}

export function AppShellCanvas({ children }: AppShellProps) {
  return <div className="flex-2">{children}</div>;
}

export const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",

    margin: "16px",
    flex: "1 1 calc(33.333% - 32px)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    transition: "transform 0.2s",
    cursor: "pointer",
  };
  return <div style={cardStyle}>{children}</div>;
};

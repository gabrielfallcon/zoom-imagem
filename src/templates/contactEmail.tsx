export type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f4f4f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td align="center">
              <table
                width="600"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginTop: "40px",
                }}
              >
                {/* HEADER */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#ee0874",
                      padding: "24px",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        color: "#000",
                        margin: 0,
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Novo contato recebido
                    </h1>
                  </td>
                </tr>

                {/* BODY */}
                <tr>
                  <td style={{ padding: "32px" }}>
                    <p
                      style={{
                        margin: "0 0 24px 0",
                        color: "#374151",
                        fontSize: "14px",
                      }}
                    >
                      Você recebeu uma nova mensagem através do formulário de
                      contato do site.
                    </p>

                    {/* DADOS */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={label}>Nome</td>
                      </tr>
                      <tr>
                        <td style={value}>{name}</td>
                      </tr>

                      <tr>
                        <td style={label}>Email</td>
                      </tr>
                      <tr>
                        <td style={value}>{email}</td>
                      </tr>

                      <tr>
                        <td style={label}>Mensagem</td>
                      </tr>
                      <tr>
                        <td style={messageBox}>{message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* FOOTER */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#f9fafb",
                      padding: "20px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#9ca3af",
                    }}
                  >
                    Este e-mail foi gerado automaticamente pelo seu site.
                  </td>
                </tr>
              </table>

              {/* spacing bottom */}
              <div style={{ height: "40px" }} />
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

const label = {
  fontSize: "12px",
  color: "#6b7280",
  marginTop: "16px",
  paddingBottom: "4px",
  fontWeight: "600" as const,
};

const value = {
  fontSize: "14px",
  color: "#111827",
  paddingBottom: "12px",
};

const messageBox = {
  fontSize: "14px",
  color: "#111827",
  backgroundColor: "#f3f4f6",
  padding: "16px",
  borderRadius: "6px",
  whiteSpace: "pre-wrap" as const,
};

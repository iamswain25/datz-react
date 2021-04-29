import React from "react";
import draftToHtml from "draftjs-to-html";
import { useLocation } from "react-router-dom";
import AdminBodyDraftHtml from "./AdminBodyDraftHtml";
export default function BodyDraftHtml({ item }: { item: any }) {
  const { body, bodyDraft } = item;
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin/")) {
    return <AdminBodyDraftHtml item={item} />;
  }
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: bodyDraft
          ? draftToHtml(bodyDraft, undefined, undefined, (entity, text) => {
              if (entity.type === "LINK") {
                var targetOption = entity.data.targetOption || "_blank";
                return '<a href="'
                  .concat(entity.data.url, '" target="')
                  .concat(targetOption, '">')
                  .concat(text, "</a>");
              }
            })
          : body,
      }}
    />
  );
}

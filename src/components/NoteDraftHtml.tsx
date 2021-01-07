import React from "react";
import draftToHtml from "draftjs-to-html";
import { useLocation } from "react-router-dom";
import Linkify from "./Linkify";
import AdminNoteDraftHtml from "./AdminNoteDraftHtml";
export default function NoteDraftHtml({ item }: { item: any }) {
  const { notes, noteDraft } = item;
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin/")) {
    return <AdminNoteDraftHtml item={item} />;
  }
  if (noteDraft) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: draftToHtml(
            noteDraft,
            undefined,
            undefined,
            (entity, text) => {
              if (entity.type === "LINK") {
                var targetOption = entity.data.targetOption || "_blank";
                return '<a href="'
                  .concat(entity.data.url, '" target="')
                  .concat(targetOption, '">')
                  .concat(text, "</a>");
              }
            }
          ),
        }}
      />
    );
  } else {
    return <Linkify>{notes}</Linkify>;
  }
}

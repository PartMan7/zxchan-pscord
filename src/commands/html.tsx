// recognize HTML commands and try to parse them
// if they have no parser, just return the sanitized HTML

import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html-react";

export default function HTML({ message }: any) {
  return (
    <div className="p-2 ml-14 mr-14 m-2 text-white border border-solid border-gray-border bg-gray-600 rounded">
      <span className="">
        {parse(sanitizeHtml(message, {
          // allowedTags: ["img"], // TODO: This is ugly as fuck, style them
        }))}
      </span>
    </div>
  );
}

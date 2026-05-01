#!/usr/bin/env python3
"""Regenerate the selected talk screenshots.

Usage:
  python3 scripts/extract-screenshots.py ../Composition_Is_All_You_Need.mp4 docs/slides
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

SLIDES: list[tuple[str, str]] = [
    ('00:30', 'title'),
    ('01:02', 'user-form-create'),
    ('01:10', 'user-form-update'),
    ('01:20', 'boolean-props-added'),
    ('01:30', 'update-name-variant'),
    ('01:40', 'prop-soup'),
    ('01:50', 'is-there-a-better-way'),
    ('02:40', 'composer-variants-global-vs-ephemeral'),
    ('03:00', 'typical-approach'),
    ('03:30', 'channel-composer-basic'),
    ('03:40', 'thread-composer-basic'),
    ('04:00', 'is-thread-prop'),
    ('04:20', 'dm-thread-vs-channel-thread'),
    ('04:30', 'is-dm-thread-prop'),
    ('04:50', 'edit-message-differences'),
    ('05:45', 'composer-current-implementation'),
    ('05:50', 'dropzone-boolean'),
    ('06:00', 'footer-editing-boolean'),
    ('06:20', 'actions-array-abstraction'),
    ('06:40', 'actions-array-with-conditions'),
    ('06:50', 'jsx-action-components'),
    ('07:10', 'fragment-illusion-conditions'),
    ('07:30', 'edit-cancel-save-actions'),
    ('07:50', 'footer-conditional-submit'),
    ('08:20', 'render-submit-limitation'),
    ('08:30', 'story-of-react-codebases'),
    ('09:00', 'forward-message-ui'),
    ('09:20', 'forward-state-outside-composer'),
    ('09:50', 'nightmare-composer-api'),
    ('10:00', 'build-like-radix'),
    ('10:20', 'composer-provider-frame-input-footer'),
    ('10:30', 'dropzone-component-rendered'),
    ('10:40', 'footer-with-submit-and-actions'),
    ('10:50', 'common-actions-introduction'),
    ('11:10', 'channel-composer-composition'),
    ('11:20', 'common-actions-implementation'),
    ('11:55', 'channel-composer-final'),
    ('12:10', 'thread-composer-add-one-piece'),
    ('12:40', 'edit-composer-no-dropzone'),
    ('13:00', 'edit-footer-specific-actions'),
    ('13:20', 'edit-cancel-save-jsx'),
    ('13:30', 'distinct-component-trees'),
    ('14:20', 'forward-message-local-state'),
    ('14:40', 'forward-message-composer-shared-parts'),
    ('14:50', 'forward-composer-code'),
    ('15:00', 'provider-defines-interface'),
    ('15:30', 'provider-actions-and-meta'),
    ('15:50', 'input-uses-context'),
    ('16:20', 'react-compiler-context-memoization'),
    ('16:40', 'provider-with-submit-handler'),
    ('17:00', 'buttons-outside-composer'),
    ('17:20', 'lift-state-title'),
    ('17:30', 'provider-with-children'),
    ('18:00', 'button-uses-context'),
    ('18:20', 'actions-use-context-outside-frame'),
    ('19:00', 'final-forward-composition'),
    ('19:20', 'final-forward-dialog-code'),
    ('19:40', 'channel-provider-with-use-global-channel'),
    ('20:00', 'channel-provider-final'),
    ('20:20', 'channel-composer-swaps-provider'),
    ('20:40', 'ai-writes-code-question'),
    ('21:30', 'v0-mobile-and-chess-example'),
]


def to_seconds(timestamp: str) -> float:
    minutes, seconds = timestamp.split(':')
    return int(minutes) * 60 + float(seconds)


def safe_timestamp(timestamp: str) -> str:
    return timestamp.replace(':', 'm').replace('.', '_') + 's'


def extract(video: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    manifest = []

    for index, (timestamp, slug) in enumerate(SLIDES, start=1):
        seconds = to_seconds(timestamp)
        filename = f'{index:02d}_{safe_timestamp(timestamp)}_{slug}.jpg'
        output = out_dir / filename

        # Accurate-but-fast seek: seek near the timestamp, then precise seek in the short segment.
        preseek = max(0, seconds - 3)
        postseek = seconds - preseek
        subprocess.run(
            [
                'ffmpeg',
                '-hide_banner',
                '-loglevel',
                'error',
                '-y',
                '-ss',
                str(preseek),
                '-i',
                str(video),
                '-ss',
                str(postseek),
                '-frames:v',
                '1',
                '-q:v',
                '2',
                str(output),
            ],
            check=True,
        )

        manifest.append(
            {
                'index': index,
                'timestamp': timestamp,
                'seconds': seconds,
                'slug': slug,
                'file': str(output),
            }
        )

    (out_dir / 'manifest.json').write_text(json.dumps(manifest, indent=2))


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(__doc__)
        raise SystemExit(2)

    extract(Path(sys.argv[1]), Path(sys.argv[2]))

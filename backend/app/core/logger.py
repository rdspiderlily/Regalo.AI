# backend/app/core/logger.py
import logging

logger = logging.getLogger("regalo_ai")
logger.setLevel(logging.INFO)

ch = logging.StreamHandler()
formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
ch.setFormatter(formatter)
logger.addHandler(ch)


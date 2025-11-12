# Site Restore Information

This branch restores the repository to the state it was in at commit `f1b5ad4d0c29da9426c61dd2bbead87648ad7f70`.

## What was restored

All HTML, CSS, and JavaScript files have been restored to their pre-Copilot state, specifically before the commit `aa9cd35c0bef94acc7ca39cec530250006c01150` which introduced changes to contact information and demo UI.

## Key changes reverted

1. **Contact information**: Reverted from `info@10xgrow.ai` back to `sales@10xgrow.com`  
2. **Contact page**: Restored original form layout and contact details (phone, address)
3. **Demo page**: Restored original demo interface
4. **Index page**: Restored original homepage content
5. **Product pages**: Restored original product pages

## Target commit details

- SHA: `f1b5ad4d0c29da9426c61dd2bbead87648ad7f70`
- Date: 2025-11-11T20:02:39Z
- Message: "Initial plan"
- Author: copilot-swe-agent[bot]

This restore is non-destructive - the commit history is preserved, and this creates a new branch for review before merging.
